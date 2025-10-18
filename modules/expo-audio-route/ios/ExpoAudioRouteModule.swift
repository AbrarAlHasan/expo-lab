import AVFoundation
import ExpoModulesCore

public class ExpoAudioRouteModule: Module {
  private let notificationCenter: NotificationCenter = .default
  private var routeChangeObserver: NSObjectProtocol?

  public func definition() -> ModuleDefinition {
    Name("ExpoAudioRoute")
    Events("onAudioRouteChange")

    AsyncFunction("getCurrentRouteAsync") {
      self.currentRoute()
    }
      
      OnStartObserving("onAudioRouteChange"){
          self.startObservingRouteChange()
      }
      
      OnStopObserving("onAudioRouteChange"){
          self.stopObservingRouteChange()
      }
  }

  private func startObservingRouteChange() {
    self.routeChangeObserver = NotificationCenter.default.addObserver(
      forName: AVAudioSession.routeChangeNotification, object: AVAudioSession.sharedInstance(),
      queue: .main
    ) { [weak self] _ in
      guard let self else { return }
      self.sendEvent("onAudioRouteChange", ["route": self.currentRoute()])
    }
    try? AVAudioSession.sharedInstance().setActive(true, options: [])
  }

  private func stopObservingRouteChange() {
    if let routeChangeObserver: any NSObjectProtocol {
      notificationCenter.removeObserver(routeChangeObserver)
      self.routeChangeObserver = nil
    }
  }

  private func currentRoute() -> String {
    let session = AVAudioSession.sharedInstance()
    let outputs = session.currentRoute.outputs

    guard let first = outputs.first else {
      return "unknown"
    }

    switch first.portType {
    case .headphones, .headsetMic:
      return "wiredHeadset"
    case .bluetoothA2DP, .bluetoothLE, .bluetoothHFP:
      return "bluetooth"
    case .builtInSpeaker:
      return "speaker"
    default:
      return "unknown"
    }

  }

}
