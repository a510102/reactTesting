type GreetingsProps = {
  name: string;
  onSendWaves?: (waves: string) => void;
};

export const Greetings = ({ 
  name, 
  onSendWaves 
}: GreetingsProps) => {
  return (
    <div>
      <p>Hello {name}!</p>
      {!!onSendWaves && (
        <button
          type="button"
          onClick={() => 
              onSendWaves(`Waves sent to ${name}!`)}
        >
          Send 👋
        </button>
      )}
    </div>
  );
};