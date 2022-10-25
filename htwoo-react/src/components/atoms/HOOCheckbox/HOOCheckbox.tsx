import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import { getRandomString } from "../../common/Common";

export interface IHOOCheckboxProps extends IHOOStandardProps {
  /**
   * Checkbox checked.
  */
  checked: boolean;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) Checkbox label. If omitted, children will be inserted.
  */
  label?: string;
  /**
   * (Optional) Is checkbox disabled - default false.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-checkbox {rootElementAttributes.class}
  */
  rootElementAttributes?: React.AllHTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
  */
  labelElementAttributes?: React.AllHTMLAttributes<HTMLLabelElement>;
}

export interface IHOOCheckboxState {
}

export class HOOCheckboxState implements IHOOCheckboxState {
  constructor() { }
}

export default class HOOCheckbox extends React.PureComponent<IHOOCheckboxProps, IHOOCheckboxState> {
  private LOG_SOURCE: string = "💦HOOCheckbox";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-checkbox";
  private _checkboxId: string = "hoo-checkbox-";

  constructor(props: IHOOCheckboxProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOCheckbox";
    this._checkboxId += getRandomString(10);
    this.state = new HOOCheckboxState();
  }

  public render(): React.ReactElement<IHOOCheckboxProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          <input {...this._rootProps}
            id={this._checkboxId}
            {...this.props.rootElementAttributes}
            type="checkbox"
            checked={this.props.checked}
            disabled={this.props.disabled || false}
            aria-disabled={this.props.disabled || false}
            onChange={this.props.onChange}
            className={className} />
          <label htmlFor={this._checkboxId} {...this.props.labelElementAttributes}>
            {this.props.label &&
              this.props.label
            }
            {!this.props.label &&
              this.props.children
            }
          </label>
        </>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}