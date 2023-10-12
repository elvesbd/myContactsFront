import {
  useCallback, useEffect, startTransition, useState,
} from 'react';

import toast from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [hasError, setHasError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isDeletedModalVisible, setIsDeletedModalVisible] = useState(false);

  // import { APIError } from '../../errors/APIError';

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
      setFilteredContacts(contactsList);
    } catch {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }, []);

  function handleChangeSearchTerm(event) {
    const { value } = event.target;
    setSearchTerm(value);

    startTransition(() => {
      setFilteredContacts(contacts.filter((contact) => (
        contact.name.toLowerCase().includes(value.toLowerCase())
      )));
    });
  }

  function handleTryAgain() {
    loadContacts();
  }

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDeleted(contact);
    setIsDeletedModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeletedModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeingDeleted.id,
      ));

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    orderBy,
    contacts,
    hasError,
    isLoading,
    searchTerm,
    isLoadingDelete,
    filteredContacts,
    contactBeingDeleted,
    isDeletedModalVisible,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleChangeSearchTerm,
    handleConfirmDeleteContact,
  };
}
