import Icon from 'components/icon';
import clsxm from 'lib/clsxm';
import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'link' | 'icon-primary' | 'icon-secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button is disabled or not
   */
  isDisabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */


export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  const isIcon = variant === 'link';
  const variants = variant === 'primary' ? clsxm([
    !isDisabled ? 'hover:bg-primary-60 bg-primary text-white ' : 'bg-white-40 text-black-20',
  ]) :
    variant === 'secondary' ? clsxm([
      !isDisabled ? 'bg-white hover:bg-primary text-primary hover:text-white border-[1.5px] border-solid border-primary' : 'bg-white text-black-20 border-[1.5px] border-solid border-white-40',
    ]) :
      variant === 'link' ? clsxm([
        !isDisabled ? 'bg-white hover:bg-primary-5 text-primary' : 'bg-white text-black-20',
      ]) :
        variant === 'icon-primary' ? clsxm([
          !isDisabled ? 'bg-primary hover:bg-primary-60 text-white' : 'bg-white-40 text-black-20',
        ]) :
          variant === 'icon-secondary' && clsxm([
            !isDisabled ? 'bg-white hover:bg-primary-5  border-[1.5px] border-solid border-primary text-primary' : 'bg-white  border-[1.5px] border-solid border-white-40 text-black-20',
          ]);

  const setSize = (variant: string, size: string) => {
    let config;
    const isIconVariant = variant.includes('icon');
    if (size === 'large') {
      config = isIconVariant ? 'py-4 px-5 rounded-lg text-base' : 'py-3 px-5 rounded-lg text-base'
    } else if (size === 'medium') {
      config = isIconVariant ? 'py-3 px-4 rounded-md text-sm' : 'py-[10px] px-3 rounded-md text-sm'
    } else if (size === 'small') {
      config = isIconVariant ? 'py-2 px-3 rounded-md text-sm' : 'p-2 rounded-md text-sm'
    }
    return config;
  };

  return (
    <button
      type="button"
      className={[clsxm(
        'button inline-flex items-center justify-center',
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        isIcon && 'gap-[9px]',
        setSize(variant, size),'font-poppins fomt-medium',
        'transition duration-100'), `storybook-button--${size}`, variants].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {variant.includes('icon') ?
        <Icon icon="link" color='currentColor' /> :
        <>
          {isIcon && <Icon icon="link" color='currentColor' />}
          {label}
          {isIcon && <Icon icon="link" color='currentColor' />}
        </>
      }


    </button>
  );
};
