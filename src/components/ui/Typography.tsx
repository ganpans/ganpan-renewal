interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-[64px] font-normal tracking-kr ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-[40px] font-normal  tracking-kr ${className}`}>
    {children}
  </h2>
);

export const BodyLarge = ({ children, className = '' }: TextProps) => (
  <p className={`text-4xl font-normal  tracking-kr ${className}`}>{children}</p>
);

export const BodyLargeEn = ({ children, className = '' }: TextProps) => (
  <p className={`text-[35px] font-light  tracking-en ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: TextProps) => (
  <p className={`text-3xl tracking-kr  ${className}`}>{children}</p>
);

export const Caption = ({ children, className = '' }: TextProps) => (
  <p className={`text-[28px] text-gray-500 tracking-kr  ${className}`}>
    {children}
  </p>
);
