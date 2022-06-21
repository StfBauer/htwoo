import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOCardTitleProps extends IHOOStandardProps {
  /**
   * (Optional) Location text, if omitted HTML children will be rended
  */
  title?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-cardtitle {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCardTitleState {
}

export class HOOCardTitleState implements IHOOCardTitleState {
  constructor() { }
}

export default class HOOCardTitle extends React.PureComponent<IHOOCardTitleProps, IHOOCardTitleState> {
  private LOG_SOURCE: string = "💦HOOCardTitle";
  private _componentClass: string = "hoo-cardtitle";

  constructor(props: IHOOCardTitleProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardTitle";
    this.state = new HOOCardTitleState();
  }

  public render(): React.ReactElement<IHOOCardTitleProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.title && this.props.title}
          {!this.props.title && this.props.children}
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}