type MessageProps = {
    text: string;
    sender: 'user' | 'bot';
  };
  
  export default function Message({ text, sender }: MessageProps) {
    return (
      <div
        className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
            sender === 'user'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      </div>
    );
  }