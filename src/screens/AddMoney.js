// AddMoney.js

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { Context } from "../context/TransactionContext";
import { transactions } from "../dummyData/transactions";

const AddMoney = ({ navigation }) => {
  const { addMoney, state } = useContext(Context);

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be positive"),
  });

  const formik = useFormik({
    initialValues: { amount: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await addMoney({ amount: +values.amount, navigation });
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.amtTxt}>Amount</Text>
        <CustomInput
          placeholder={"₦ 0"}
          keyboardType={"numeric"}
          autoCapitalize="none"
          onChangeText={formik.handleChange("amount")}
          onBlur={formik.handleBlur("amount")}
          value={formik.values.amount}
          error={formik.touched.amount && formik.errors.amount}
        />
        <View style={styles.btnCont}>
          <CustomButton label={"Submit"} onPress={formik.handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  innerContainer: {
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  btnCont: {
    alignSelf: "center",
  },
  amtTxt: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(71, 71, 71, 1)",
  },
});

export default AddMoney;
