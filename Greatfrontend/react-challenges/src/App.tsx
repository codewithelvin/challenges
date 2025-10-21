import { Routes, Route } from 'react-router';
import NestedCheckboxes from './pages/nested-chekboxes/NestedCheckboxes';
import TransferList from './pages/transfer-list/TransferList';
import Stopwatch from './pages/stopwatch/Stopwatch';
import ImageCarouselOne from './pages/carousels/one/ImageCarouselOne';

export default function App() {
  return (
    <Routes>
      <Route path="/nested-checkboxes" element={<NestedCheckboxes />} />
      <Route path="/transfer-list" element={<TransferList />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/carousel/one" element={<ImageCarouselOne />} />
    </Routes>
  );
}
