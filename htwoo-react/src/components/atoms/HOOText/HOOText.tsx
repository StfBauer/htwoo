import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOTextProps extends IHOOStandardProps {
  /**
   * value
  */
  value: string;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  //TODO: (Stefan) Invalid input has not been completed in core
  /**
   * (Optional) Is Input Invalid - default false.
  */
  invalid?: boolean;
  /**
   * (Optional) Is Input Disabled - default false.
  */
  disabled?: boolean;
  /**
   * (Optional) Input Prefix.
  */
  inputPrefix?: string;
  /**
    * (Optional) Input Suffix.
   */
  inputSuffix?: string;
  /**
    * (Optional) Rows for multiline textarea, will render textarea with inputElementAttributes.
   */
  multiline?: number;
  /**
    * (Optional) override for input type. Default is `text`; Not used when multiline parameter is included.
   */
  inputType?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-input-group {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLDivElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component.
   * Class names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"
  */
  inputElementAttributes?: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IHOOTextState {
}

export class HOOTextState implements IHOOTextState {
  constructor() { }
}

export default class HOOText extends React.PureComponent<IHOOTextProps, IHOOTextState> {
  private LOG_SOURCE: string = "💦HOOText";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-input-group";
  private _inputClass: string = "hoo-input-text";

  constructor(props: IHOOTextProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOText";
    this.state = new HOOTextState();
  }

  public render(): React.ReactElement<IHOOTextProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const rootClassName = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      const inputClassName = (this.props.inputElementAttributes?.className) ? `${this._inputClass} ${this.props.inputElementAttributes?.className}` : this._inputClass;
      return (
        <>
          {!this.props.multiline &&
            <div {...this._rootProps} {...this.props.rootElementAttributes} className={rootClassName}>
              {this.props.inputPrefix &&
                <div className="hoo-input-prefix">{this.props.inputPrefix}</div>
              }
              <input {...this.props.inputElementAttributes}
                type={this.props.inputType || "text"}
                value={this.props.value}
                disabled={this.props.disabled || false}
                aria-disabled={this.props.disabled || false}
                data-suffix={this.props.inputSuffix || null}
                data-prefix={this.props.inputPrefix || null}
                className={inputClassName}
                onChange={this.props.onChange} />
              {this.props.inputSuffix &&
                <div className="hoo-input-suffix">{this.props.inputSuffix}</div>
              }
            </div>
          }
          {this.props.multiline &&
            <textarea {...this._rootProps}
              {...this.props.inputElementAttributes}
              className={inputClassName}
              rows={this.props.multiline}
              onChange={this.props.onChange} >
              {this.props.value}
            </textarea>
          }
        </>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}