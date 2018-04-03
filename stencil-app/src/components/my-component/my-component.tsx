import { Component, Prop } from '@stencil/core';

// import { Constants } from '@my-company/my-module';
import * as myModule from '@my-company/my-module';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last} and I import this from "Constants": {myModule.Constants.test}
      </div>
    );
  }
}
