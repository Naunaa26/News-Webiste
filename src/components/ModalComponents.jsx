import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LoadingIframe from "react-loading-iframe";
import Loading from "./Loading";

export default function ModalComponents({ news }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="p-2 text-sm mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white mx-auto flex rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Lihat Selengkapnya
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        className="bg-[#2f4f4f]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {news.title}
              </ModalHeader>
              <ModalBody>
                <LoadingIframe
                  src={news.link}
                  skeleton={<Loading />}
                  className="h-screen"
                ></LoadingIframe>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
