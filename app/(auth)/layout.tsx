//This code exports a default React component called AuthLayout. 
//It takes children as its only parameter, representing the content
 //to be rendered within it. The component wraps its children in 
 //a <div> element with CSS classes for centering both vertically
  //and horizontally within the viewport. This layout component is 
  //typically used for authentication-related views or components.

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    );
  };