import Foundation
import Capacitor

@objc(ExitAppPlugin)
public class ExitAppPlugin: CAPPlugin {
    @objc func killApp(_ call: CAPPluginCall) {
        return MinimizeOrKillApp();
    }
    
    @IBAction func MinimizeOrKillApp(){
        DispatchQueue.main.async {
            // UI work here
            UIControl().sendAction(#selector(URLSessionTask.suspend), to: UIApplication.shared, for: nil)
            // Comment if you want to minimise app
            Timer.scheduledTimer(withTimeInterval: 0.2, repeats: false) { (timer) in
                exit(0)
            }
        }
    }
}
