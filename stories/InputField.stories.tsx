import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../src/components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive input field component with support for various states, variants, and features including accessibility, dark mode, and responsive design.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual variant of the input field',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the input is in loading state',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Whether the input is in invalid state',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Whether to show a clear button',
    },
    showPasswordToggle: {
      control: { type: 'boolean' },
      description: 'Whether to show password toggle (for password inputs)',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// With error state
export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Username must be between 3 and 20 characters',
  },
};

// Password input with toggle
export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    helperText: 'Password must be at least 8 characters long',
  },
};

// Clearable input
export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for anything...',
    clearable: true,
    defaultValue: 'Sample search term',
  },
};

// All size variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <InputField
        label="Small Input"
        placeholder="Small size"
        size="sm"
        clearable
      />
      <InputField
        label="Medium Input (Default)"
        placeholder="Medium size"
        size="md"
        clearable
      />
      <InputField
        label="Large Input"
        placeholder="Large size"
        size="lg"
        clearable
      />
    </div>
  ),
};

// All variant styles
export const VariantStyles: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <InputField
        label="Filled Variant"
        placeholder="Filled style"
        variant="filled"
        helperText="This is the filled variant"
      />
      <InputField
        label="Outlined Variant (Default)"
        placeholder="Outlined style"
        variant="outlined"
        helperText="This is the outlined variant"
      />
      <InputField
        label="Ghost Variant"
        placeholder="Ghost style"
        variant="ghost"
        helperText="This is the ghost variant"
      />
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    label: 'Loading Input',
    placeholder: 'Loading...',
    loading: true,
    defaultValue: 'Loading value',
  },
};

// Required field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <InputField
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        required
        helperText="We'll never share your email with anyone else"
        clearable
      />
      
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        required
        showPasswordToggle
        helperText="Password must be at least 8 characters"
        clearable
      />
      
      <InputField
        label="Phone Number"
        placeholder="Enter your phone number"
        type="tel"
        helperText="Include country code if international"
      />
      
      <InputField
        label="Website"
        placeholder="https://example.com"
        type="url"
        helperText="Include http:// or https://"
      />
    </div>
  ),
};

// Dark mode showcase
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded-lg space-y-6 w-full max-w-md">
      <InputField
        label="Dark Mode Input"
        placeholder="This input adapts to dark mode"
        helperText="Notice the dark theme styling"
        clearable
      />
      
      <InputField
        label="Dark Mode Password"
        placeholder="Password in dark mode"
        type="password"
        showPasswordToggle
        helperText="Password toggle works in dark mode too"
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

// Accessibility showcase
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <InputField
        label="Accessible Input"
        placeholder="This input has proper ARIA labels"
        helperText="Screen readers will announce the label and helper text"
        clearable
        aria-describedby="accessibility-demo"
      />
      
      <InputField
        label="Invalid Input"
        placeholder="This input shows error state"
        invalid
        errorMessage="This field has an error"
        aria-describedby="error-demo"
      />
      
      <InputField
        label="Required Field"
        placeholder="This field is required"
        required
        helperText="Required fields are marked with an asterisk"
      />
    </div>
  ),
};

// Responsive design showcase
export const ResponsiveDesign: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Resize your browser window to see the responsive behavior
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Responsive Input 1"
          placeholder="Adapts to screen size"
          size="md"
        />
        <InputField
          label="Responsive Input 2"
          placeholder="Works on all devices"
          size="md"
        />
        <InputField
          label="Responsive Input 3"
          placeholder="Mobile-friendly"
          size="md"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}; 