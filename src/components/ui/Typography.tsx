interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-[64px] font-normal ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-[40px] font-normal ${className}`}>{children}</h2>
);

export const BodyLarge = ({ children, className = '' }: TextProps) => (
  <p className={`text-4xl font-normal ${className}`}>{children}</p>
);

export const Body = ({ children, className = '' }: TextProps) => (
  <p className={`text-3xl ${className}`}>{children}</p>
);

export const Caption = ({ children, className = '' }: TextProps) => (
  <p className={`text-[28px] text-gray-500 ${className}`}>{children}</p>
);
