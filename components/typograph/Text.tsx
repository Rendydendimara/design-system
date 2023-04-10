import clsxm from 'lib/clsxm';
import React from 'react';

interface TextProps {
    /**
     * Is this the principal call to action on the page?
     */
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'title' | 'subtitle' | 'body' | 'caption';
    /**
     * What background color to use
     */
    label: string;
    /**
   * What background color to use
   */
    color?: string;
    textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    fontWeight: 'light' | 'regular'| 'medium' | 'semi-bold' | 'bold' | 'extra-bold';
}

/**
 * Primary UI component for user interaction
 */


export const Text = ({
    variant,
    label,
    textAlign = 'left',
    color = '#070D12',
    textTransform = 'none',
    fontWeight,
    ...props
}: TextProps) => {
    const setVariants = (type: string) => {
        switch (type) {
            case 'h1':
                return 'text-h1'
            case 'h2':
                return 'text-h2'
            case 'h3':
                return 'text-32'
            case 'h4':
                return 'text-h4'
            case 'h5':
                return 'text-h5'
            case 'h6':
                return 'text-h6'
            case 'title':
                return 'text-title'
            case 'subtitle':
                return 'text-subtitle'
            case 'body':
                return 'text-body'
            case 'caption':
                return 'text-caption'
            default:
                console.log(`Sorry, we are out of ${type}.`);
        }
    }

    const setFontWeight = (type: string) => {
        switch (type) {
            case 'light':
                return 'font-light'
            case 'regular':
                return 'font-regular'
            case 'medium':
                return 'font-medium'
            case 'semi-bold':
                return 'font-semi-bold'
            case 'bold':
                return 'font-bold'
            case 'extra-bold':
                return 'font-extra-bold'
            default:
                console.log(`Sorry, we are out of ${type}.`);
        }
    }
    return (
        <p
            className={[clsxm(
                `body-font font-poppins `), setVariants(variant), setFontWeight(fontWeight)].join(' ')}
            {...props}
            style={{ color, textAlign, fontWeight, textTransform }}
        >
            {label}
        </p>
    );
};
