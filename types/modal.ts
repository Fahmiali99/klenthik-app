export type ModalType = {
  handleModal: () => void;
  handleClose: () => void;
  open: boolean;
};

export type ModaDataType = {
  [x: string]: any;
  title: string;
  description: { children: string }[];
};
