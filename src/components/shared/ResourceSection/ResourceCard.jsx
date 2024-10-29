const ResourceCard = ({ image, title, description, label }) => {
    return (
      <div className="shadow-lg bg-white border border-black p-4 rounded-md ">
        <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-md" />
        <div className="p-2">
          <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-md uppercase">
            {label}
          </span>
          <h3 className="mt-2 text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    );
  };


export default ResourceCard ;