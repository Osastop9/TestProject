import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ArrowDown, ArrowUpicon } from "../../assets/icons";
import { formatCurrency } from "../utils";

const Transactions = ({ title, tag, type, amount, date }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicatorContainer,
          {
            backgroundColor:
              type === "Credit"
                ? "rgba(34, 176, 125, 0.1)"
                : "rgba(255, 114, 107, 0.1)",
          },
        ]}
      >
        {type === "Credit" ? <ArrowDown /> : <ArrowUpicon />}
      </View>
      <View style={styles.deatilsContainer}>
        <View>
          <Text style={styles.transactionTxt}>{title}</Text>
          <View style={styles.labelContainer}>
            <Text style={styles.labelTxt}>{tag}</Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.amountTxt,
              {
                color:
                  type === "Credit"
                    ? "rgba(10, 175, 27, 1)"
                    : "rgba(255, 114, 107, 1)",
              },
            ]}
          >
            {formatCurrency(amount)}
          </Text>
          <Text style={styles.dateTxt}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  deatilsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  labelContainer: {
    backgroundColor: "rgba(233, 237, 241, 1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 2,
    width: 60,
  },
  labelTxt: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 10,
  },
  transactionTxt: {
    fontSize: 12,
    marginBottom: 5,
    color: "rgba(6, 20, 35, 1)",
  },
  amountTxt: {
    alignSelf: "flex-end",
    fontSize: 12,
    marginBottom: 5,
  },
  dateTxt: {
    color: "rgba(77, 74, 74, 1)",
    fontSize: 12,
  },
});

export default Transactions;
