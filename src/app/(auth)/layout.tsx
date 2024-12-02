interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="w-full bg-red-500">Auth navbar</p>
      {children}
    </div>
  );
};

export default AuthLayout;
