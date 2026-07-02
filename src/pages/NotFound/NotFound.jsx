import { Compass } from 'lucide-react';
import Button from '../../components/common/Button.jsx';
import Container from '../../components/common/Container.jsx';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-background pt-36">
      <Container className="grid min-h-[70vh] place-items-center text-center">
        <div className="max-w-xl">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-[28px] bg-royal text-white shadow-glow">
            <Compass size={44} />
          </div>
          <h1 className="mt-8 text-[34px] font-black leading-tight sm:text-[60px]">This corridor is closed today.</h1>
          <p className="mt-4 text-lg leading-8 text-muted">The page you are looking for may have moved, but the main campus is one click away.</p>
          <Button to="/" className="mt-8">Back Home</Button>
        </div>
      </Container>
    </section>
  );
}
