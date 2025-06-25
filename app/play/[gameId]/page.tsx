type Props = {
  params: { gameId: string };
};

export default function PlayGamePage({ params }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Playing Game: {params.gameId}</h1>
        <p className="mt-2">This is where the interactive game will be rendered.</p>
      </div>
    </div>
  );
}
