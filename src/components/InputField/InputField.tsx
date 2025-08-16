import React, { forwardRef, useState, useCallback } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed below the input */
  errorMessage?: string;
  /** Whether the input is in an invalid state */
  invalid?: boolean;
  /** Whether the input is in a loading state */
  loading?: boolean;
  /** Visual variant of the input */
  variant?: 'filled' | 'outlined' | 'ghost';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show a clear button */
  clearable?: boolean;
  /** Whether to show password toggle (only for password inputs) */
  showPasswordToggle?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Whether the input is required */
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      invalid = false,
      loading = false,
      variant = 'outlined',
      size = 'md',
      clearable = false,
      showPasswordToggle = false,
      onClear,
      className = '',
      disabled = false,
      type = 'text',
      placeholder,
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState(props.value || props.defaultValue || '');

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const hasError = invalid || !!errorMessage;

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      props.onChange?.(e);
    }, [props.onChange]);

    const handleClear = useCallback(() => {
      setValue('');
      onClear?.();
      // Trigger onChange with empty value
      const event = {
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange?.(event);
    }, [onClear, props.onChange]);

    const togglePasswordVisibility = useCallback(() => {
      setShowPassword(!showPassword);
    }, [showPassword]);

    // Generate unique ID for accessibility
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-4 py-3 text-lg',
    };

    // Variant classes
    const variantClasses = {
      filled: 'bg-gray-50 border-gray-300 dark:bg-gray-800 dark:border-gray-600',
      outlined: 'bg-transparent border-gray-300 dark:border-gray-600',
      ghost: 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-gray-800',
    };

    // Icon sizes
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    return (
      <div className={`input-field-base ${className}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={`block font-medium mb-2 text-gray-700 dark:text-gray-200 ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
            }`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            required={required}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            aria-invalid={hasError}
            aria-required={required}
            className={`
              input-field-input
              ${sizeClasses[size]}
              ${variantClasses[variant]}
              border rounded-lg
              text-gray-900 dark:text-gray-100
              placeholder-gray-500 dark:placeholder-gray-400
              ${hasError ? 'input-field-error' : ''}
              ${disabled ? 'cursor-not-allowed opacity-50' : ''}
              ${loading ? 'cursor-wait' : ''}
              ${clearable || showPasswordToggle ? 'pr-12' : ''}
              ${loading ? 'pr-12' : ''}
            `}
            {...props}
          />

          {/* Loading Spinner */}
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader2 className={`${iconSizes[size]} animate-spin text-gray-400`} />
            </div>
          )}

          {/* Password Toggle */}
          {isPassword && showPasswordToggle && !loading && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={disabled}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className={iconSizes[size]} />
              ) : (
                <Eye className={iconSizes[size]} />
              )}
            </button>
          )}

          {/* Clear Button */}
          {clearable && value && !loading && !isPassword && (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
              aria-label="Clear input"
            >
              <X className={iconSizes[size]} />
            </button>
          )}

          {/* Clear Button for Password (when no toggle) */}
          {clearable && value && !loading && isPassword && !showPasswordToggle && (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
              aria-label="Clear input"
            >
              <X className={iconSizes[size]} />
            </button>
          )}

          {/* Clear Button for Password with Toggle */}
          {clearable && value && !loading && isPassword && showPasswordToggle && (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
              aria-label="Clear input"
            >
              <X className={iconSizes[size]} />
            </button>
          )}
        </div>

        {/* Helper Text */}
        {helperText && !hasError && (
          <p
            id={helperId}
            className={`mt-2 text-gray-600 dark:text-gray-400 ${
              size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-sm'
            }`}
          >
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {hasError && (
          <p
            id={errorId}
            className={`mt-2 text-red-600 dark:text-red-400 ${
              size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-sm'
            }`}
            role="alert"
          >
            {errorMessage || 'This field is invalid'}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField'; 