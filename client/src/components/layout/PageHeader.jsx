const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
};

export default PageHeader;