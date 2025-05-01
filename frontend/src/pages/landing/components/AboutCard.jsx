export default function AboutCard({ title, description, icon, iconColor, iconBg }) {

  return (
    <div className="card h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50 rounded-lg border-0">
      <div className="card-body p-6 text-center">
        <div className={`${iconBg} ${iconColor} rounded-full p-4 mb-6 mx-auto w-16 h-16 flex items-center justify-center`}>
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
    