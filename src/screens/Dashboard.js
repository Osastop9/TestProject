import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useContext } from "react";
import Screen from "../components/Screen";
import {
  WalletIcon,
  QRScanIcon,
  OrdersIcon,
  MobileIcon,
  TransferIcon,
  PayBills,
  POSIcon,
  SettingsIcon,
  ChatIcon,
} from "../../assets/icons";
import OptionsButton from "../components/OptionsButton";
import FeatureButton from "../components/FeatureButton";
import Transactions from "../components/Transactions";
import { transactions } from "../dummyData/transactions";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/TransactionContext";
import { formatCurrency } from "../utils";
const Dashboard = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Tab1");
  const value = useContext(Context);

  const creditTransactions = transactions.filter(
    (transaction) => transaction.type === "Credit"
  );
  const debitTransactions = transactions.filter(
    (transaction) => transaction.type === "Debit"
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Transactions
                amount={item.amount}
                date={item.date}
                tag={item.tag}
                title={item.title}
                type={item.type}
              />
            )}
          />
        );
      case "Tab2":
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={creditTransactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Transactions
                title={item.title}
                tag={item.tag}
                type={item.type}
                amount={item.amount}
                date={item.date}
              />
            )}
          />
        );
      case "Tab3":
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={debitTransactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Transactions
                title={item.title}
                tag={item.tag}
                type={item.type}
                amount={item.amount}
                date={item.date}
              />
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Screen>
      <View style={styles.topback}></View>
      <View style={styles.innerContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.accountText}>Account Balance</Text>
          <Text style={styles.balanceText}>
            {formatCurrency(value.state.amount)}
          </Text>
          <View style={styles.divider} />
          <View style={styles.optionsContainer}>
            <OptionsButton
              text={"Add Money"}
              icon={<WalletIcon />}
              onPress={() => navigation.navigate("Add Money")}
            />
            <OptionsButton text={"Show QR Code"} icon={<QRScanIcon />} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <FeatureButton
              label={"Pay For Orders"}
              color={"rgba(249, 91, 47, 0.15)"}
              icon={<OrdersIcon />}
            />
            <FeatureButton
              label={"Airtime & Data"}
              color={"rgba(24, 58, 173, 0.15)"}
              icon={<MobileIcon />}
            />
            <FeatureButton
              label={"Transfer Money"}
              color={"rgba(16, 134, 173, 0.15)"}
              icon={<TransferIcon />}
            />
          </View>
          <View style={styles.row}>
            <FeatureButton
              label={"Pay Bills"}
              color={"rgba(253, 146, 35, 0.15)"}
              icon={<PayBills />}
            />
            <FeatureButton
              label={"POS"}
              color={"rgba(253, 35, 91, 0.15)"}
              icon={<POSIcon />}
            />
            <FeatureButton
              label={"Settings"}
              color={"rgba(253, 35, 91, 0.15)"}
              icon={<SettingsIcon />}
            />
          </View>
        </View>
        <View style={styles.transactionHeader}>
          <Text style={styles.acctTransTxt}>Account Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewMoreTxt}>View More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={{
                backgroundColor:
                  activeTab === "Tab1" ? "rgba(255, 255, 255, 1)" : null,
                paddingVertical: 10,
                width: "32%",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => setActiveTab("Tab1")}
            >
              <Text
                style={{ color: activeTab === "Tab1" ? "#A682FF" : "black" }}
              >
                Both
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor:
                  activeTab === "Tab2" ? "rgba(255, 255, 255, 1)" : null,
                paddingVertical: 10,
                width: "36%",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => setActiveTab("Tab2")}
            >
              <Text
                style={{ color: activeTab === "Tab2" ? "#A682FF" : "black" }}
              >
                In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor:
                  activeTab === "Tab3" ? "rgba(255, 255, 255, 1)" : null,
                paddingVertical: 10,
                width: "32%",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => setActiveTab("Tab3")}
            >
              <Text
                style={{ color: activeTab === "Tab3" ? "#A682FF" : "black" }}
              >
                Out
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, padding: 10 }}>{renderContent()}</View>
        </View>
        <TouchableOpacity style={styles.fabContainer}>
          <ChatIcon />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topback: {
    height: 180,
    backgroundColor: "#A682FF",
  },
  innerContainer: {
    marginTop: 8,
    position: "absolute",
    top: 0,
    height: 650,
    paddingHorizontal: 10,
    paddingTop: 30,
    width: "90%",
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  detailsContainer: {
    height: 140,
    backgroundColor: "#A682FF",
    borderRadius: 20,
  },
  divider: {
    marginTop: "auto",
    alignSelf: "center",
    width: "90%",
    height: 0.5,
    backgroundColor: "white",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
    marginHorizontal: 15,
  },
  accountText: {
    textAlign: "center",
    color: "white",
    marginVertical: 15,
    fontSize: 16,
  },
  balanceText: {
    textAlign: "center",
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  transactionHeader: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  acctTransTxt: {
    fontSize: 14,
  },
  viewMoreTxt: {
    color: "#A682FF",
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  fabContainer: {
    position: "absolute",
    bottom: -20,
    right: 0,
    height: 50,
    width: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgba(166, 130, 255, 1)",
  },
});

export default Dashboard;
