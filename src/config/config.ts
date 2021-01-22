export class MyAppConfig {
  static templateUrl = 'config/config.html';
  enabled: boolean;
  appModel: any;
  appEditCtrl: any;

  constructor($scope: any, $injector: any, private $q: any) {
    this.enabled = false;
  }

  postUpdate() {
    if (this.appModel.enabled) {
      return this.$q.resolve();
    }

    return this.appEditCtrl.importDashboards().then(() => {
      this.enabled = true;
      return {
        url: 'plugins/asd-my-app/edit',
        message: 'My App enabled!',
      };
    });
  }
}
