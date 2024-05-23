import './Image.css';
import GandhiImage from './Mahatma-Gandhi,_studio,_1931.jpg';

export function Image() {
  return (
    <div className="Image">
      <img src={GandhiImage} alt="Mahatma Gandhi" />
    </div>
  );
}
