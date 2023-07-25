import React, { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  InputGroup,
  InputLeftElement,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../Components/nav-bar/Navbar";
import HeroSection from "../Components/hero-section/HeroSection";
import Cards from "../Components/card-item/Cards"
import Footer from "../Components/footer/Footer";
import './styles.css';
export const Traveldata = () => {
  const toast = useToast();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://travel-gixb.onrender.com/travelinfo", data);
      toast({
        title: "Your data added successfully",

        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <Navbar />
      <HeroSection />
      <Heading as="h1" mb="8" textAlign="center" className="header" >
        Please enter your Travel Details
      </Heading>
        <div className="form-inline" onSubmit={submitForm}>
          <FormControl mb="4" isRequired className="container">
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              name="Name"
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </FormControl>
          <FormControl mb="4" isRequired className="container">
            <label className="label" htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl mb="4" isRequired className="container">
            <label className="label">Where do you want to go?</label >
            <Select
              placeholder="choose location"
              name="Location"
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
            </Select>
          </FormControl>
          <FormControl mb="4" isRequired className="container">
            <label className="label">No. of travellers</label>
            <input
              type="number"
              name="No_of_travellers"
              onChange={handleChange}
              placeholder="enter number of travellers"
            />
          </FormControl>
          <FormControl mb="4" isRequired className="container">
            <label className="label">Budget per person in $</label>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              />
              <input
                type="number"
                name="Budget"
                onChange={handleChange}
                placeholder="Enter your budget"
              />
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w="full"
            disabled={loading}
            alignSelf={"center"}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      <br/>
      <Cards />
      <Footer />
    </>
  );
};
