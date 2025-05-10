export default function AboutCard({ title, description, icon, iconColor, iconBg }) {

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6 text-center flex-grow">
        <div className={`inline-flex items-center justify-center bg-gray-100 bg-opacity-50 rounded-full p-4 mb-6 ${iconColor}`}>
            {icon}
        </div>
        <h4 className="font-bold text-xl mb-4">{title}</h4>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
    