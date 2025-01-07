import { useState, useEffect } from "react";
import {
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MailLockIcon from "@mui/icons-material/MailLock";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {status && (
        <Alert
          status={status === "error" ? "error" : "success"}
          variant="subtle"
          mb={4}
        >
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>
              {status === "sending"
                ? "Sending..."
                : status === "error"
                ? "Error!"
                : "Thank you for subscribing!"}
            </AlertTitle>
            <AlertDescription display="block">{message}</AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="abc@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormLabel>First Name</FormLabel>
        <Input
          placeholder="Ali"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <FormLabel>Last Name</FormLabel>
        <Input
          placeholder="Hassan"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <Button
          variant="solid"
          colorScheme="green"
          rightIcon={<MailLockIcon />}
          sx={{ position: "relative", top: "2pc", left: "1pc" }}
          type="submit"
        >
          Subscribe Me
        </Button>
      </FormControl>
    </form>
  );
};

export default function IMailChimp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const REACT_MAILCHIMP_ID = "d87e9dba2c";
  const REACT_MAILCHIMP_U = "f3563ffe13448becd2b60312c";

  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=${REACT_MAILCHIMP_U}&id=${REACT_MAILCHIMP_ID}`;

  return (
    <Box sx={{ position: "relative", top: "5pc" }}>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        variant="ghost"
        leftIcon={<MarkunreadMailboxIcon />}
      >
        Subscriber
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <CircleNotificationsIcon
              sx={{ position: "relative", top: "0.3pc" }}
            />
            Newsletters for members
          </ModalHeader>
          <ModalCloseButton variant="none" onClick={onClose} />
          <ModalBody>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
