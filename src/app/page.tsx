import Calculator from '@/components/calculator/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-2 font-headline">Kalkulyator</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Precision & Reliability</p>
        </div>
        <Calculator />
        <div className="mt-8 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Modern Computational Engine v1.0
        </div>
      </div>
    </main>
  );
}
