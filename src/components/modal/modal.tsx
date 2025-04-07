import React from "react";
import {
  Buttons,
  CancelButton,
  ConfirmButton,
  ModalContainer,
  ModalTitle,
  Overlay
} from "./styles";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalTitle>Tem certeza que deseja deletar esta tarefa?</ModalTitle>
        <Buttons>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Deletar</ConfirmButton>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
}
