import { Routes, Route } from 'react-router';
import NestedCheckboxes from './pages/nested-chekboxes/NestedCheckboxes';
import TransferList from './pages/transfer-list/TransferList';

export default function App() {
  return (
    <Routes>
      <Route path="/nested-checkboxes" element={<NestedCheckboxes />} />
      <Route path="/transfer-list" element={<TransferList />} />
    </Routes>
  );
}
