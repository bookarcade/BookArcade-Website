import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Table, Divider, Icon } from "antd";

class TableList extends React.Component {
  constructor(props) {
    super(props);

    console.log("Executing fetchBuy");
    const { fetchBuy } = this.props;
    fetchBuy();
  }

  state = {
    selectedRowKeys: [] // Check here to configure the default column
  };

  columns = [
    {
      title: "Book",
      dataIndex: "book"
    },
    {
      title: "Username",
      dataIndex: "uid"
    },
    {
      title: "Amount",
      dataIndex: "order_total"
    },
    {
      title: "Address",
      dataIndex: "shipping_address"
    },
    {
      title: "Date",
      dataIndex: "date"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>
            <Icon type="check" theme="outlined" />
          </a>
          <Divider type="vertical" />
          <a>
            <Icon type="close" theme="outlined" />
          </a>
        </span>
      )
    }
  ];

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    let dataNew = [];

    //Getting the data on buy orders from redux store
    let data = this.props.data.buy;
    let i = 1;

    //Storing data to show it in the table
    for (let obj of data) {
      i++;
      console.log(obj);
      dataNew.push({
        key: i,
        book: obj.book,
        date: obj.createdAt,
        uid: obj.uid,
        order_total: obj.order_total,
        shipping_address: obj.shipping_address
      });
    }

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        },
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ],
      onSelection: this.onSelection
    };
    return (
      <Table
        rowSelection={rowSelection}
        columns={this.columns}
        dataSource={dataNew}
      />
    );
  }
}

const mapStateToProps = ({ data, auth }) => ({
  data,
  auth
});

export default connect(
  mapStateToProps,
  actions
)(TableList);
