// import Icon from 'components/icon';
import clsx from 'clsx';
import React from 'react';
import './WebInput.css';

interface TextInputProps {
  /**
   * ID of the input
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the input
   * @type {string}
   */
  labelText?: string;

  /**
   * Helper text to help the user
   * @type {string}
   * @defaultValue undefined
   */
  helperText?: string;

  /**
   * Placeholder
   * @type {string}
   */
  placeholder?: string;

  /**
   * Icon to display inside text input
   * @type {VitamixId}
   * @defaultValue undefined
   */
  icon?: any;

  /**
   * Is a TextArea
   * @type {boolean}
   * @defaultValue false (Input)
   */
  multiline?: boolean;

  /**
   * Whether input is successful or not
   * @type {boolean}
   * @defaultValue false
   */
  valid?: boolean;

  /**
   * Whether input is in error or not
   * @type {boolean}
   * @defaultValue false
   */
  error?: boolean;

  /**
   * Called when icon is clicked
   * @type {React.MouseEventHandler}
   * @defaultValue undefined
   */
  onIconClick?: React.MouseEventHandler;

  /**
   * Classes to be applied to the label
   * @type {string}
   */
  labelClassName?: string;

  /**
   * Props to be spreaded to the label
   * @type {object}
   */
  labelProps?: React.ComponentPropsWithoutRef<'label'>;

  // any properti
  className?: any;
  disabled?: boolean;
}

export const WebInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  TextInputProps
>(
  (
    {
      className,
      disabled = false,
      error = false,
      helperText,
      icon = undefined,
      identifier,
      labelText,
      placeholder,
      valid = false,
      onIconClick,
      labelClassName,
      labelProps,
      ...props
    },
    ref
  ) => {
    const { multiline, ...rest } = props;
    return (
      <>
        {labelText && (
          <>
            <label
              className={`ds-text-input_label ${labelClassName || ''}`}
              htmlFor={identifier}
              {...labelProps}
            >
              {labelText}
            </label>
            <br />
          </>
        )}
        {multiline ? (
          <textarea
            className={clsx('ds-text-input', className, {
              'ds-text--input--error': error,
              'ds-text--input--valid': valid,
            })}
            id={identifier}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={(error && !disabled) || undefined}
            aria-describedby={
              (helperText && `${identifier}-helper-text`) || undefined
            }
            ref={ref}
            {...rest}
          />
        ) : (
          <div className='ds-text--input_container'>
            <svg
              className='icon-right'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.2913 6.45841C12.2913 7.72407 11.2653 8.75008 9.99967 8.75008C8.73402 8.75008 7.70801 7.72407 7.70801 6.45841C7.70801 5.19276 8.73402 4.16675 9.99967 4.16675C11.2653 4.16675 12.2913 5.19276 12.2913 6.45841Z'
                stroke='#555F6D'
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M6.04074 13.1115C6.0305 12.7665 5.7425 12.4951 5.39748 12.5053C5.05245 12.5156 4.78105 12.8036 4.79129 13.1486L6.04074 13.1115ZM8.23685 15.7917V15.1667C8.23094 15.1667 8.22502 15.1668 8.21911 15.167L8.23685 15.7917ZM11.7618 15.7917L11.7796 15.167C11.7737 15.1668 11.7678 15.1667 11.7618 15.1667V15.7917ZM15.2074 13.1486C15.2176 12.8036 14.9462 12.5156 14.6012 12.5053C14.2562 12.4951 13.9682 12.7665 13.958 13.1115L15.2074 13.1486ZM13.958 13.0278C13.9682 13.3728 14.2562 13.6442 14.6012 13.634C14.9462 13.6237 15.2176 13.3357 15.2074 12.9907L13.958 13.0278ZM11.7618 10.3476V10.9726C11.7678 10.9726 11.7737 10.9725 11.7796 10.9723L11.7618 10.3476ZM8.23685 10.3476L8.21911 10.9723C8.22502 10.9725 8.23094 10.9726 8.23685 10.9726V10.3476ZM4.79129 12.9907C4.78105 13.3357 5.05245 13.6237 5.39748 13.634C5.7425 13.6442 6.0305 13.3728 6.04074 13.0278L4.79129 12.9907ZM4.79129 13.1486C4.84643 15.0068 6.39628 16.4692 8.25459 16.4165L8.21911 15.167C7.05026 15.2002 6.07542 14.2803 6.04074 13.1115L4.79129 13.1486ZM8.23685 16.4167H11.7618V15.1667H8.23685V16.4167ZM11.7441 16.4165C13.6024 16.4692 15.1523 15.0068 15.2074 13.1486L13.958 13.1115C13.9233 14.2803 12.9484 15.2002 11.7796 15.167L11.7441 16.4165ZM15.2074 12.9907C15.1523 11.1325 13.6024 9.67006 11.7441 9.72281L11.7796 10.9723C12.9484 10.9391 13.9233 11.859 13.958 13.0278L15.2074 12.9907ZM11.7618 9.72256H8.23685V10.9726H11.7618V9.72256ZM8.25459 9.72281C6.39628 9.67006 4.84643 11.1325 4.79129 12.9907L6.04074 13.0278C6.07542 11.859 7.05026 10.9391 8.21911 10.9723L8.25459 9.72281Z'
                fill='#555F6D'
              />
            </svg>

            <input
              className={clsx(
                'ds-text-input',
                className,
                { 'ds-text--input--valid': valid && !disabled },
                { 'ds-text--input--error': error && !disabled }
              )}
              id={identifier}
              type='text'
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={(error && !disabled) || undefined}
              aria-describedby={
                (helperText && `${identifier}-helper-text`) || undefined
              }
              ref={ref}
              {...rest}
            />
            {/* {icon && <VtmnIcon value={icon} onClick={onIconClick} />} */}
          </div>
        )}
        {helperText && (
          <p
            id={`${identifier}-helper-text`}
            className={clsx('ds-text-input_helper-text', className, {
              'ds-text-input_helper-text--error': error,
            })}
          >
            {helperText}
          </p>
        )}
      </>
    );
  }
);

const MemoWebInput = React.memo(WebInput);

MemoWebInput.displayName = 'WebInput';

export default MemoWebInput;
