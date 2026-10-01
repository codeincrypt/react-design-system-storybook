import React, { useMemo, useState } from 'react';
import Table from './Table';
import Input from './Input';

const DataTable = ({
  columns,
  dataSource = [],
  searchable = true,
  searchPlaceholder = 'Search...',
  pageSize = 5,
  toolbar,
  ...props
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dataSource;
    return dataSource.filter((row) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(q))
    );
  }, [dataSource, query]);

  return (
    <div>
      {(searchable || toolbar) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 16 }}>
          {searchable ? (
            <Input
              allowClear
              style={{ maxWidth: 280 }}
              placeholder={searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          ) : <span />}
          {toolbar}
        </div>
      )}
      <Table
        columns={columns}
        dataSource={filtered}
        rowKey={(row) => row.key ?? row.id}
        pagination={{ pageSize, hideOnSinglePage: true }}
        {...props}
      />
    </div>
  );
};

export default DataTable;
