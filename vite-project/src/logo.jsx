import './logo.css';

const BreakingLogo = ({ result }) => {
  if (!result || result.length === 0) {
    return null;
  }

  return (
    <div className='logo'>
      {result.map((part, index) => (
        <div key={index} className={part.atomicNumber ? 'breaking' : ''}>
          <span>{part.part}</span>
          {part.atomicNumber && <p>{part.atomicNumber}</p>}
        </div>
      ))}
    </div>
  );
};

export default BreakingLogo;
