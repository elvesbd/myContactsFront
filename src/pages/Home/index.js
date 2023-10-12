import useHome from './useHome';
import { Container } from './styles';
import Modal from '../../components/Modal';
import { Header } from './components/Header';
import Loader from '../../components/Loader';
import EmptyList from './components/EmptyList';
import ErrorStatus from './components/ErrorStatus';
import ContactsList from './components/ContactsList';
import { InputSearch } from './components/InputSearch';
import SearchNotFound from './components/SearchNotFound';

export default function Home() {
  const {
    orderBy,
    hasError,
    contacts,
    isLoading,
    searchTerm,
    handleTryAgain,
    isLoadingDelete,
    filteredContacts,
    contactBeingDeleted,
    handleToggleOrderBy,
    handleDeleteContact,
    isDeletedModalVisible,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isEmptyList = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      ) }

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isEmptyList && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            orderBy={orderBy}
            filteredContacts={filteredContacts}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            confirmLabel="Deletar"
            isLoading={isLoadingDelete}
            visible={isDeletedModalVisible}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}" ?`}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
