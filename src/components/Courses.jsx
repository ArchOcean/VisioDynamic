function Courses({ img, title }) {
  return (
    <div className="w-[18.25rem] border-2 border-[#e4e4e4] hover:border-[#c7c7c7] bg-white rounded-lg inline-block p-5 shadow-none hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
      <img
        className="w-[17rem] h-[12rem] object-cover mb-4 rounded-lg"
        src={img}
        alt={title || "Image"}
      />
      <h1 className="font-bold text-[1.25rem]">{title || "Title"}</h1>
    </div>
  );
}

export default Courses;
