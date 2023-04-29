import { createRoot } from 'react-dom/client';
import StarShipCard from '../components/StarShipCard';

let container = null;
let root = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  root.unmount();
  root = null;
  container.remove();
  container = null;
});

const starShip = {
  name: 'Star Destroyer',
  model: 'Imperial I-class Star Destroyer',
  hyperdrive_rating: '2.0',
  url: 'https://swapi.dev/api/starships/9/'
};

let name;
let model;
let hyperdrive_rating;

describe('show starship page', () => {
  test('do you have starship data', () => {
    root?.render(<StarShipCard starShip={starShip} />);

    name = container?.textContent === 'Star Destroyer';
    expect(name).toBeDefined();

    model = container?.textContent === 'Imperial I-class Star Destroyer';
    expect(model).toBeDefined();
    
    hyperdrive_rating = container?.textContent === '2.0';
    expect(hyperdrive_rating).toBeDefined();
  });
});
