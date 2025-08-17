# InputField Component Library

A beautifully crafted, accessible input field component built with React, TypeScript, and TailwindCSS. This component library provides a comprehensive set of input field variations with thoughtful design details and smooth interactions.

##  Features

### Core Functionality
- **Multiple Variants**: Filled, outlined, and ghost styles
- **Size Options**: Small, medium, and large sizes
- **State Management**: Normal, disabled, loading, and error states
- **Password Toggle**: Show/hide password functionality
- **Clear Button**: Optional clear functionality for text inputs
- **Form Validation**: Built-in error handling and validation states

### Design & UX
- **Clean, Human Design**: Thoughtful design that feels handcrafted, not AI-generated
- **Accessibility**: Full ARIA support and keyboard navigation
- **Dark Mode**: Seamless dark/light theme switching
- **Responsive**: Works perfectly on all screen sizes
- **Smooth Animations**: Subtle, natural transitions and interactions

### Technical Excellence
- **TypeScript**: Full type safety and excellent developer experience
- **React 18**: Built with modern React patterns and hooks
- **TailwindCSS**: Utility-first styling with custom design system
- **Storybook**: Comprehensive component documentation and testing
- **Vite**: Fast development and build tooling

##  Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd input-field-component
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the demo

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Storybook
npm run storybook    # Start Storybook development server
npm run build-storybook  # Build Storybook for production

# Type checking
npm run type-check   # Run TypeScript type checking
```

##  Usage

### Basic Usage

```tsx
import { InputField } from './components/InputField';

function MyForm() {
  return (
    <InputField
      label="Email Address"
      placeholder="Enter your email"
      type="email"
      helperText="We'll never share your email"
    />
  );
}
```

### Advanced Usage

```tsx
import { InputField } from './components/InputField';

function AdvancedForm() {
  return (
    <div className="space-y-6">
      {/* Password with toggle */}
      <InputField
        label="Password"
        type="password"
        showPasswordToggle
        required
        helperText="Must be at least 8 characters"
      />
      
      {/* Search with clear button */}
      <InputField
        label="Search"
        placeholder="Search for anything..."
        clearable
        variant="ghost"
      />
      
      {/* Error state */}
      <InputField
        label="Email"
        type="email"
        invalid
        errorMessage="Please enter a valid email address"
      />
      
      {/* Loading state */}
      <InputField
        label="Processing"
        loading
        defaultValue="Validating..."
      />
    </div>
  );
}
```

##  Component API

### InputField Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the input |
| `helperText` | `string` | - | Helper text displayed below the input |
| `errorMessage` | `string` | - | Error message displayed below the input |
| `invalid` | `boolean` | `false` | Whether the input is in an invalid state |
| `loading` | `boolean` | `false` | Whether the input is in a loading state |
| `variant` | `'filled' \| 'outlined' \| 'ghost'` | `'outlined'` | Visual variant of the input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `clearable` | `boolean` | `false` | Whether to show a clear button |
| `showPasswordToggle` | `boolean` | `false` | Whether to show password toggle |
| `required` | `boolean` | `false` | Whether the input is required |
| `onClear` | `() => void` | - | Callback when clear button is clicked |

### Variants

- **Outlined** (Default): Clean white background with border
- **Filled**: Subtle gray background for form-heavy interfaces
- **Ghost**: Transparent background for search interfaces

### Sizes

- **Small**: Compact size for tight spaces
- **Medium**: Standard size for most use cases
- **Large**: Comfortable size for better accessibility

## 🏗️ Architecture & Approach

### Design Philosophy

The component was designed with a **human-centered approach**, focusing on:

1. **Simplicity Over Complexity**: Clean, minimal design that prioritizes usability
2. **Thoughtful Interactions**: Subtle animations that enhance rather than distract
3. **Accessibility First**: Built with ARIA standards and keyboard navigation
4. **Consistency**: Unified design language across all variants and states

### Technical Architecture

#### Component Structure
```
InputField/
├── InputField.tsx      # Main component logic
├── index.ts           # Export file
└── types.ts           # TypeScript interfaces
```

#### Key Design Decisions

1. **State Management**
   - Uses React hooks for internal state (password visibility, input value)
   - Controlled component pattern for external state management
   - Callback-based communication with parent components

2. **Styling Approach**
   - TailwindCSS utility classes for consistency
   - Custom CSS classes for complex interactions
   - CSS custom properties for theme switching
   - Responsive design with mobile-first approach

3. **Accessibility Implementation**
   - Proper ARIA attributes (`aria-describedby`, `aria-invalid`, `aria-required`)
   - Unique ID generation for form associations
   - Keyboard navigation support
   - Screen reader friendly labels and descriptions

4. **Performance Considerations**
   - Memoized callbacks with `useCallback`
   - Efficient re-rendering with proper dependency arrays
   - Lazy loading of icons and animations

### File Structure

```
src/
├── components/
│   └── InputField/
│       ├── InputField.tsx
│       └── index.ts
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts

stories/
└── InputField.stories.tsx

.storybook/
├── main.ts
└── preview.ts

public/
└── vite.svg
```

### Development Workflow

1. **Component Development**
   - Start with TypeScript interfaces
   - Implement core functionality
   - Add styling and interactions
   - Test accessibility features

2. **Storybook Integration**
   - Create comprehensive stories for all variants
   - Document props and usage examples
   - Test different states and interactions

3. **Testing & Validation**
   - Manual testing across browsers
   - Accessibility testing with screen readers
   - Responsive design validation
   - Performance optimization

## 🎯 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) for focus states and interactions
- **Gray Scale**: Neutral grays for backgrounds and borders
- **Semantic Colors**: Red for errors, green for success states

### Typography
- **Font Family**: Inter with system font fallbacks
- **Font Sizes**: Responsive scale (sm, base, lg)
- **Line Heights**: Optimized for readability

### Spacing
- **Consistent Scale**: 4px base unit system
- **Responsive**: Adapts to different screen sizes
- **Visual Hierarchy**: Clear spacing between elements

### Animations
- **Duration**: 200ms for natural feel
- **Easing**: `ease-out` for smooth interactions
- **Subtle**: Focus on enhancing UX, not distracting

## 🔧 Customization

### Theme Customization

The component uses TailwindCSS custom properties for easy theming:

```css
/* Custom colors */
:root {
  --color-primary: #3b82f6;
  --color-error: #ef4444;
  --color-success: #22c55e;
}

/* Dark mode */
.dark {
  --color-primary: #60a5fa;
  --color-error: #f87171;
  --color-success: #4ade80;
}
```

### Styling Overrides

You can customize the component using TailwindCSS classes:

```tsx
<InputField
  label="Custom Input"
  className="border-purple-300 focus:border-purple-500"
  helperText="Custom styling applied"
/>
```

## 📚 Storybook

The project includes comprehensive Storybook documentation:

```bash
npm run storybook
```

### Available Stories
- **Default**: Basic input field usage
- **With Error**: Error state demonstration
- **With Helper Text**: Helper text examples
- **Password with Toggle**: Password field functionality
- **Clearable**: Clear button functionality
- **Size Variations**: All size options
- **Variant Styles**: All visual variants
- **States**: Loading, disabled, and validation states
- **Dark Mode**: Dark theme showcase
- **Accessibility**: ARIA and keyboard navigation
- **Responsive Design**: Mobile and tablet layouts

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain accessibility standards
- Add comprehensive tests
- Update documentation
- Follow the existing code style

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **React Team**: For the amazing framework
- **TailwindCSS**: For the utility-first CSS framework
- **Lucide React**: For the beautiful icons
- **Storybook**: For the component documentation platform
- **Vite**: For the fast build tooling

---



