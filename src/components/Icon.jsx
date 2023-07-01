function Icon({ children, ...rest }) {
  return (
    <div {...rest} className="cursor-pointer p-2 rounded-full">
      {children}
    </div>
  );
}

export default Icon;
