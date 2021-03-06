import { Component } from '@angular/core';

@Component({
  selector: 'sky-cli-commands-action-buttons',
  templateUrl: 'cli-commands-action-button.component.html'
})
export class CLICommandsActionButtonsComponent {
  public routes = [
    {
      name: 'build',
      path: '/learn/reference/cli-commands/build',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Builds the current SPA into the dist/ folder.'
    },
    {
      name: 'build-public-library',
      path: '/learn/reference/cli-commands/build-public-library',
      icon: 'book',
      // tslint:disable-next-line
      summary: 'Bundles components into an NPM module.'
    },
    {
      name: 'certs',
      path: '/learn/reference/cli-commands/certs',
      icon: 'file',
      // tslint:disable-next-line
      summary: 'Install the certificate for local development.'
    },
    {
      name: 'e2e',
      path: '/learn/reference/cli-commands/e2e',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Runs any e2e tests in the e2e folder.'
    },
    {
      name: 'generate',
      path: '/learn/reference/cli-commands/generate',
      icon: 'plus-circle',
      // tslint:disable-next-line
      summary: 'Creates SKY UX template items.'
    },
    {
      name: 'help',
      path: '/learn/reference/cli-commands/help',
      icon: 'question-circle-o',
      // tslint:disable-next-line
      summary: 'Displays help for SKY UX CLI arguments.'
    },
    {
      name: 'install',
      path: '/learn/reference/cli-commands/install',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Deletes and re-installs SKY UX dependencies.'
    },
    {
      name: 'lint',
      path: '/learn/reference/cli-commands/lint',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Validates Typescript code against rules.'
    },
    {
      name: 'new',
      path: '/learn/reference/cli-commands/new',
      icon: 'plus-circle',
      // tslint:disable-next-line
      summary: 'Initializes a new local SKY UX project.'
    },
    {
      name: 'pact',
      path: '/learn/reference/cli-commands/pact',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Runs any pact tests in the src/app folder.'
    },
    {
      name: 'serve',
      path: '/learn/reference/cli-commands/serve',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Serves the current application locally.'
    },
    {
      name: 'test',
      path: '/learn/reference/cli-commands/test',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Runs any unit tests in the src/app folder.'
    },
    {
      name: 'upgrade',
      path: '/learn/reference/cli-commands/upgrade',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Updates the dependencies for your SPA.'
    },
    {
      name: 'version',
      path: '/learn/reference/cli-commands/version',
      icon: 'info-circle',
      // tslint:disable-next-line
      summary: 'Returns the version of SKY UX CLI.'
    },
    {
      name: 'watch',
      path: '/learn/reference/cli-commands/watch',
      icon: 'binoculars',
      // tslint:disable-next-line
      summary: 'Runs unit tests and watches for changes.'
    }
  ];
}
