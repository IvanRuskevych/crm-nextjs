'use client';

import React from 'react';
import Modal, { ModalProps } from '@/app/components/modal';
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}

export default CompanyFormModal;
