import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOCardImageProps extends IHOOStandardProps {
  /**
   * (Optional) Image source, if omitted HTML children will be rended
  */
  imageSource?: string;
  /**
  * (Optional) ACCESSIBILITY: Image alt, include when using imageSource
 */
  imageAlt?: string;
  /**
   * (Optional) Image width, include when using imageSource or defaults to 320
  */
  width?: number;
  /**
   * (Optional) Image height, include when using imageSource or defaults to 180
  */
  height?: number;
  /**
  * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
  * Class names will be appended to the end of the default class string - hoo-card {rootElementAttributes.class}
 */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOCardImageState {
}

export class HOOCardImageState implements IHOOCardImageState {
  constructor() { }
}

export default class HOOCardImage extends React.PureComponent<IHOOCardImageProps, IHOOCardImageState> {
  private LOG_SOURCE: string = "💦HOOCardImage";
  private _componentClass: string = "hoo-card";

  constructor(props: IHOOCardImageProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCardImage";
    this._componentClass += (props.imageSource) ? "image" : "html";
    this.state = new HOOCardImageState();
  }

  public render(): React.ReactElement<IHOOCardImageProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          {this.props.imageSource &&
            <img src={this.props.imageSource} width={this.props.width || 320} height={this.props.height || 180} alt={this.props.imageAlt} />
          }
          {!this.props.imageSource &&
            this.props.children
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}