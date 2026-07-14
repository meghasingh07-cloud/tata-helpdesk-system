import MainLayout from "../components/layout/MainLayout";
import SearchFilter from "../components/dashboard/SearchFilter";
import TicketTable from "../components/dashboard/TicketTable";

function Tickets() {
  return (
    <MainLayout>
      <h1>Ticket Management</h1>
      <p>View, search and manage support tickets.</p>
      <SearchFilter />
      <TicketTable />
    </MainLayout>
  );
}

export default Tickets;