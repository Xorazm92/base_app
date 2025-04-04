import { ErrorPrompt } from './types';

export const ERROR_PROMPT_MAP = {
  postgres: {
    case_not_found: {
      id: 1,
      status: 'FAILURE',
      code: '20000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    cardinality_violation: {
      id: 2,
      status: 'FAILURE',
      code: '21000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    data_exception: {
      id: 3,
      status: 'FAILURE',
      code: '22000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    string_data_right_truncation: {
      id: 115,
      status: 'FAILURE',
      code: '01004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    null_value_no_indicator_parameter: {
      id: 5,
      status: 'FAILURE',
      code: '22002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    numeric_value_out_of_range: {
      id: 6,
      status: 'FAILURE',
      code: '22003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    null_value_not_allowed: {
      id: 65,
      status: 'FAILURE',
      code: '39004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    error_in_assignment: {
      id: 8,
      status: 'FAILURE',
      code: '22005',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_datetime_format: {
      id: 9,
      status: 'FAILURE',
      code: '22007',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    datetime_field_overflow: {
      id: 10,
      status: 'FAILURE',
      code: '22008',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_time_zone_displacement_value: {
      id: 11,
      status: 'FAILURE',
      code: '22009',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_indicator_parameter_value: {
      id: 12,
      status: 'FAILURE',
      code: '22010',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    substring_error: {
      id: 13,
      status: 'FAILURE',
      code: '22011',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    division_by_zero: {
      id: 14,
      status: 'FAILURE',
      code: '22012',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_preceding_or_following_size: {
      id: 15,
      status: 'FAILURE',
      code: '22013',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_ntile_function: {
      id: 16,
      status: 'FAILURE',
      code: '22014',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    interval_field_overflow: {
      id: 17,
      status: 'FAILURE',
      code: '22015',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_nth_value_function: {
      id: 18,
      status: 'FAILURE',
      code: '22016',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_character_value_for_cast: {
      id: 19,
      status: 'FAILURE',
      code: '22018',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_escape_character: {
      id: 20,
      status: 'FAILURE',
      code: '22019',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    character_not_in_repertoire: {
      id: 21,
      status: 'FAILURE',
      code: '22021',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    indicator_overflow: {
      id: 22,
      status: 'FAILURE',
      code: '22022',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_parameter_value: {
      id: 23,
      status: 'FAILURE',
      code: '22023',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    unterminated_c_string: {
      id: 24,
      status: 'FAILURE',
      code: '22024',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_escape_sequence: {
      id: 25,
      status: 'FAILURE',
      code: '22025',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    string_data_length_mismatch: {
      id: 26,
      status: 'FAILURE',
      code: '22026',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    trim_error: {
      id: 27,
      status: 'FAILURE',
      code: '22027',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_json_object_key_value: {
      id: 28,
      status: 'FAILURE',
      code: '22030',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_sql_json_datetime_function: {
      id: 29,
      status: 'FAILURE',
      code: '22031',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_json_text: {
      id: 30,
      status: 'FAILURE',
      code: '22032',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_sql_json_subscript: {
      id: 31,
      status: 'FAILURE',
      code: '22033',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    more_than_one_sql_json_item: {
      id: 32,
      status: 'FAILURE',
      code: '22034',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_sql_json_item: {
      id: 33,
      status: 'FAILURE',
      code: '22035',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    non_numeric_sql_json_item: {
      id: 34,
      status: 'FAILURE',
      code: '22036',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    non_unique_keys_in_a_json_object: {
      id: 35,
      status: 'FAILURE',
      code: '22037',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    singleton_sql_json_item_required: {
      id: 36,
      status: 'FAILURE',
      code: '22038',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_json_array_not_found: {
      id: 37,
      status: 'FAILURE',
      code: '22039',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    integrity_constraint_violation: {
      id: 38,
      status: 'FAILURE',
      code: '23000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    restrict_violation: {
      id: 39,
      status: 'FAILURE',
      code: '23001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    not_null_violation: {
      id: 40,
      status: 'FAILURE',
      code: '23502',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    foreign_key_violation: {
      id: 41,
      status: 'FAILURE',
      code: '23503',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    unique_violation: {
      id: 42,
      status: 'FAILURE',
      code: '23505',
      labels: [
        'Some value is repeating, field must be unique.',
        'Некоторые значения повторяются, поле должно быть уникальным.',
        "Ba'zi qiymat takrorlanmoqda, maydon noyob bo'lishi kerak.",
      ],
    },
    check_violation: {
      id: 43,
      status: 'FAILURE',
      code: '23514',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_cursor_state: {
      id: 44,
      status: 'FAILURE',
      code: '24000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_transaction_state: {
      id: 45,
      status: 'FAILURE',
      code: '25000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    active_sql_transaction: {
      id: 46,
      status: 'FAILURE',
      code: '25001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    branch_transaction_already_active: {
      id: 47,
      status: 'FAILURE',
      code: '25002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    inappropriate_access_mode_for_branch_transaction: {
      id: 48,
      status: 'FAILURE',
      code: '25003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    inappropriate_isolation_level_for_branch_transaction: {
      id: 49,
      status: 'FAILURE',
      code: '25004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_active_sql_transaction_for_branch_transaction: {
      id: 50,
      status: 'FAILURE',
      code: '25005',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    read_only_sql_transaction: {
      id: 51,
      status: 'FAILURE',
      code: '25006',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    schema_and_data_statement_mixing_not_supported: {
      id: 52,
      status: 'FAILURE',
      code: '25007',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    held_cursor_requires_same_isolation_level: {
      id: 53,
      status: 'FAILURE',
      code: '25008',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_sql_statement_name: {
      id: 54,
      status: 'FAILURE',
      code: '26000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    triggered_data_change_violation: {
      id: 55,
      status: 'FAILURE',
      code: '27000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_authorization_specification: {
      id: 56,
      status: 'FAILURE',
      code: '28000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_cursor_name: {
      id: 57,
      status: 'FAILURE',
      code: '34000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    external_routine_exception: {
      id: 58,
      status: 'FAILURE',
      code: '38000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    containing_sql_not_permitted: {
      id: 59,
      status: 'FAILURE',
      code: '38001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    modifying_sql_data_not_permitted: {
      id: 179,
      status: 'FAILURE',
      code: '2F002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    prohibited_sql_statement_attempted: {
      id: 180,
      status: 'FAILURE',
      code: '2F003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    reading_sql_data_not_permitted: {
      id: 181,
      status: 'FAILURE',
      code: '2F004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    external_routine_invocation_exception: {
      id: 63,
      status: 'FAILURE',
      code: '39000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_sqlstate_returned: {
      id: 64,
      status: 'FAILURE',
      code: '39001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    transaction_rollback: {
      id: 66,
      status: 'FAILURE',
      code: '40000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    serialization_failure: {
      id: 67,
      status: 'FAILURE',
      code: '40001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    transaction_integrity_constraint_violation: {
      id: 68,
      status: 'FAILURE',
      code: '40002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    statement_completion_unknown: {
      id: 69,
      status: 'FAILURE',
      code: '40003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    syntax_error_or_access_rule_violation: {
      id: 70,
      status: 'FAILURE',
      code: '42000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    insufficient_privilege: {
      id: 71,
      status: 'FAILURE',
      code: '42501',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    syntax_error: {
      id: 72,
      status: 'FAILURE',
      code: '42601',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_name: {
      id: 73,
      status: 'FAILURE',
      code: '42602',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_column_definition: {
      id: 74,
      status: 'FAILURE',
      code: '42611',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    name_too_long: {
      id: 75,
      status: 'FAILURE',
      code: '42622',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_column: {
      id: 76,
      status: 'FAILURE',
      code: '42701',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    ambiguous_column: {
      id: 77,
      status: 'FAILURE',
      code: '42702',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_column: {
      id: 78,
      status: 'FAILURE',
      code: '42703',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_object: {
      id: 79,
      status: 'FAILURE',
      code: '42704',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_object: {
      id: 80,
      status: 'FAILURE',
      code: '42710',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_alias: {
      id: 81,
      status: 'FAILURE',
      code: '42712',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_function: {
      id: 82,
      status: 'FAILURE',
      code: '42723',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    ambiguous_function: {
      id: 83,
      status: 'FAILURE',
      code: '42725',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    grouping_error: {
      id: 84,
      status: 'FAILURE',
      code: '42803',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    datatype_mismatch: {
      id: 85,
      status: 'FAILURE',
      code: '42804',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    wrong_object_type: {
      id: 86,
      status: 'FAILURE',
      code: '42809',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_foreign_key: {
      id: 87,
      status: 'FAILURE',
      code: '42830',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    cannot_coerce: {
      id: 88,
      status: 'FAILURE',
      code: '42846',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_function: {
      id: 89,
      status: 'FAILURE',
      code: '42883',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    reserved_name: {
      id: 90,
      status: 'FAILURE',
      code: '42939',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    with_check_option_violation: {
      id: 91,
      status: 'FAILURE',
      code: '44000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    insufficient_resources: {
      id: 92,
      status: 'FAILURE',
      code: '53000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    disk_full: {
      id: 93,
      status: 'FAILURE',
      code: '53100',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    out_of_memory: {
      id: 94,
      status: 'FAILURE',
      code: '53200',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_connections: {
      id: 95,
      status: 'FAILURE',
      code: '53300',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    configuration_limit_exceeded: {
      id: 96,
      status: 'FAILURE',
      code: '53400',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    program_limit_exceeded: {
      id: 97,
      status: 'FAILURE',
      code: '54000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    statement_too_complex: {
      id: 98,
      status: 'FAILURE',
      code: '54001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_columns: {
      id: 99,
      status: 'FAILURE',
      code: '54011',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_arguments: {
      id: 100,
      status: 'FAILURE',
      code: '54023',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    object_not_in_prerequisite_state: {
      id: 101,
      status: 'FAILURE',
      code: '55000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    object_in_use: {
      id: 102,
      status: 'FAILURE',
      code: '55006',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    operator_intervention: {
      id: 103,
      status: 'FAILURE',
      code: '57000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    query_canceled: {
      id: 104,
      status: 'FAILURE',
      code: '57014',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    system_error: {
      id: 105,
      status: 'FAILURE',
      code: '58000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    io_error: {
      id: 106,
      status: 'FAILURE',
      code: '58030',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    snapshot_too_old: {
      id: 107,
      status: 'FAILURE',
      code: '72000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    successful_completion: {
      id: 108,
      status: 'FAILURE',
      code: '00000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    warning: {
      id: 109,
      status: 'FAILURE',
      code: '01000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    dynamic_result_sets_returned: {
      id: 110,
      status: 'FAILURE',
      code: '0100C',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    implicit_zero_bit_padding: {
      id: 111,
      status: 'FAILURE',
      code: '01008',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    null_value_eliminated_in_set_function: {
      id: 112,
      status: 'FAILURE',
      code: '01003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    privilege_not_granted: {
      id: 113,
      status: 'FAILURE',
      code: '01007',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    privilege_not_revoked: {
      id: 114,
      status: 'FAILURE',
      code: '01006',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    deprecated_feature: {
      id: 116,
      status: 'FAILURE',
      code: '01P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_data: {
      id: 117,
      status: 'FAILURE',
      code: '02000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_additional_dynamic_result_sets_returned: {
      id: 118,
      status: 'FAILURE',
      code: '02001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_statement_not_yet_complete: {
      id: 119,
      status: 'FAILURE',
      code: '03000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    connection_exception: {
      id: 120,
      status: 'FAILURE',
      code: '08000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    connection_does_not_exist: {
      id: 121,
      status: 'FAILURE',
      code: '08003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    connection_failure: {
      id: 122,
      status: 'FAILURE',
      code: '08006',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sqlclient_unable_to_establish_sqlconnection: {
      id: 123,
      status: 'FAILURE',
      code: '08001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sqlserver_rejected_establishment_of_sqlconnection: {
      id: 124,
      status: 'FAILURE',
      code: '08004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    transaction_resolution_unknown: {
      id: 125,
      status: 'FAILURE',
      code: '08007',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    protocol_violation: {
      id: 126,
      status: 'FAILURE',
      code: '08P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    triggered_action_exception: {
      id: 127,
      status: 'FAILURE',
      code: '09000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    feature_not_supported: {
      id: 128,
      status: 'FAILURE',
      code: '0A000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_transaction_initiation: {
      id: 129,
      status: 'FAILURE',
      code: '0B000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    locator_exception: {
      id: 130,
      status: 'FAILURE',
      code: '0F000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_locator_specification: {
      id: 131,
      status: 'FAILURE',
      code: '0F001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_grantor: {
      id: 132,
      status: 'FAILURE',
      code: '0L000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_grant_operation: {
      id: 133,
      status: 'FAILURE',
      code: '0LP01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_role_specification: {
      id: 134,
      status: 'FAILURE',
      code: '0P000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    diagnostics_exception: {
      id: 135,
      status: 'FAILURE',
      code: '0Z000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    stacked_diagnostics_accessed_without_active_handler: {
      id: 136,
      status: 'FAILURE',
      code: '0Z002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    array_subscript_error: {
      id: 137,
      status: 'FAILURE',
      code: '2202E',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    escape_character_conflict: {
      id: 138,
      status: 'FAILURE',
      code: '2200B',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_logarithm: {
      id: 139,
      status: 'FAILURE',
      code: '2201E',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_power_function: {
      id: 140,
      status: 'FAILURE',
      code: '2201F',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_argument_for_width_bucket_function: {
      id: 141,
      status: 'FAILURE',
      code: '2201G',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_escape_octet: {
      id: 142,
      status: 'FAILURE',
      code: '2200D',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    nonstandard_use_of_escape_character: {
      id: 143,
      status: 'FAILURE',
      code: '22P06',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_regular_expression: {
      id: 144,
      status: 'FAILURE',
      code: '2201B',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_row_count_in_limit_clause: {
      id: 145,
      status: 'FAILURE',
      code: '2201W',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_row_count_in_result_offset_clause: {
      id: 146,
      status: 'FAILURE',
      code: '2201X',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_tablesample_argument: {
      id: 147,
      status: 'FAILURE',
      code: '2202H',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_tablesample_repeat: {
      id: 148,
      status: 'FAILURE',
      code: '2202G',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_use_of_escape_character: {
      id: 149,
      status: 'FAILURE',
      code: '2200C',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    most_specific_type_mismatch: {
      id: 150,
      status: 'FAILURE',
      code: '2200G',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sequence_generator_limit_exceeded: {
      id: 151,
      status: 'FAILURE',
      code: '2200H',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    zero_length_character_string: {
      id: 152,
      status: 'FAILURE',
      code: '2200F',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    floating_point_exception: {
      id: 153,
      status: 'FAILURE',
      code: '22P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_text_representation: {
      id: 154,
      status: 'FAILURE',
      code: '22P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_binary_representation: {
      id: 155,
      status: 'FAILURE',
      code: '22P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    bad_copy_file_format: {
      id: 156,
      status: 'FAILURE',
      code: '22P04',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    untranslatable_character: {
      id: 157,
      status: 'FAILURE',
      code: '22P05',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    not_an_xml_document: {
      id: 158,
      status: 'FAILURE',
      code: '2200L',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_xml_document: {
      id: 159,
      status: 'FAILURE',
      code: '2200M',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_xml_content: {
      id: 160,
      status: 'FAILURE',
      code: '2200N',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_xml_comment: {
      id: 161,
      status: 'FAILURE',
      code: '2200S',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_xml_processing_instruction: {
      id: 162,
      status: 'FAILURE',
      code: '2200T',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_json_member_not_found: {
      id: 163,
      status: 'FAILURE',
      code: '2203A',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_json_number_not_found: {
      id: 164,
      status: 'FAILURE',
      code: '2203B',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_json_object_not_found: {
      id: 165,
      status: 'FAILURE',
      code: '2203C',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_json_array_elements: {
      id: 166,
      status: 'FAILURE',
      code: '2203D',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_json_object_members: {
      id: 167,
      status: 'FAILURE',
      code: '2203E',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_json_scalar_required: {
      id: 168,
      status: 'FAILURE',
      code: '2203F',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    exclusion_violation: {
      id: 169,
      status: 'FAILURE',
      code: '23P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_active_sql_transaction: {
      id: 170,
      status: 'FAILURE',
      code: '25P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    in_failed_sql_transaction: {
      id: 171,
      status: 'FAILURE',
      code: '25P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    idle_in_transaction_session_timeout: {
      id: 172,
      status: 'FAILURE',
      code: '25P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_password: {
      id: 173,
      status: 'FAILURE',
      code: '28P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    dependent_privilege_descriptors_still_exist: {
      id: 174,
      status: 'FAILURE',
      code: '2B000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    dependent_objects_still_exist: {
      id: 175,
      status: 'FAILURE',
      code: '2BP01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_transaction_termination: {
      id: 176,
      status: 'FAILURE',
      code: '2D000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    sql_routine_exception: {
      id: 177,
      status: 'FAILURE',
      code: '2F000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    function_executed_no_return_statement: {
      id: 178,
      status: 'FAILURE',
      code: '2F005',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    trigger_protocol_violated: {
      id: 182,
      status: 'FAILURE',
      code: '39P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    srf_protocol_violated: {
      id: 183,
      status: 'FAILURE',
      code: '39P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    event_trigger_protocol_violated: {
      id: 184,
      status: 'FAILURE',
      code: '39P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    savepoint_exception: {
      id: 185,
      status: 'FAILURE',
      code: '3B000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_savepoint_specification: {
      id: 186,
      status: 'FAILURE',
      code: '3B001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_catalog_name: {
      id: 187,
      status: 'FAILURE',
      code: '3D000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_schema_name: {
      id: 188,
      status: 'FAILURE',
      code: '3F000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    deadlock_detected: {
      id: 189,
      status: 'FAILURE',
      code: '40P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    windowing_error: {
      id: 190,
      status: 'FAILURE',
      code: '42P20',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_recursion: {
      id: 191,
      status: 'FAILURE',
      code: '42P19',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    indeterminate_datatype: {
      id: 192,
      status: 'FAILURE',
      code: '42P18',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    collation_mismatch: {
      id: 193,
      status: 'FAILURE',
      code: '42P21',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    indeterminate_collation: {
      id: 194,
      status: 'FAILURE',
      code: '42P22',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    generated_always: {
      id: 195,
      status: 'FAILURE',
      code: '428C9',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_table: {
      id: 196,
      status: 'FAILURE',
      code: '42P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_parameter: {
      id: 197,
      status: 'FAILURE',
      code: '42P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_cursor: {
      id: 198,
      status: 'FAILURE',
      code: '42P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_database: {
      id: 199,
      status: 'FAILURE',
      code: '42P04',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_prepared_statement: {
      id: 200,
      status: 'FAILURE',
      code: '42P05',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_schema: {
      id: 201,
      status: 'FAILURE',
      code: '42P06',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_table: {
      id: 202,
      status: 'FAILURE',
      code: '42P07',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    ambiguous_parameter: {
      id: 203,
      status: 'FAILURE',
      code: '42P08',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    ambiguous_alias: {
      id: 204,
      status: 'FAILURE',
      code: '42P09',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_column_reference: {
      id: 205,
      status: 'FAILURE',
      code: '42P10',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_cursor_definition: {
      id: 206,
      status: 'FAILURE',
      code: '42P11',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_database_definition: {
      id: 207,
      status: 'FAILURE',
      code: '42P12',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_function_definition: {
      id: 208,
      status: 'FAILURE',
      code: '42P13',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_prepared_statement_definition: {
      id: 209,
      status: 'FAILURE',
      code: '42P14',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_schema_definition: {
      id: 210,
      status: 'FAILURE',
      code: '42P15',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_table_definition: {
      id: 211,
      status: 'FAILURE',
      code: '42P16',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    invalid_object_definition: {
      id: 212,
      status: 'FAILURE',
      code: '42P17',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    cant_change_runtime_param: {
      id: 213,
      status: 'FAILURE',
      code: '55P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    lock_not_available: {
      id: 214,
      status: 'FAILURE',
      code: '55P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    unsafe_new_enum_value_usage: {
      id: 215,
      status: 'FAILURE',
      code: '55P04',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    admin_shutdown: {
      id: 216,
      status: 'FAILURE',
      code: '57P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    crash_shutdown: {
      id: 217,
      status: 'FAILURE',
      code: '57P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    cannot_connect_now: {
      id: 218,
      status: 'FAILURE',
      code: '57P03',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    database_dropped: {
      id: 219,
      status: 'FAILURE',
      code: '57P04',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    undefined_file: {
      id: 220,
      status: 'FAILURE',
      code: '58P01',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    duplicate_file: {
      id: 221,
      status: 'FAILURE',
      code: '58P02',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    config_file_error: {
      id: 222,
      status: 'FAILURE',
      code: 'F0000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    lock_file_exists: {
      id: 223,
      status: 'FAILURE',
      code: 'F0001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_error: {
      id: 224,
      status: 'FAILURE',
      code: 'HV000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_column_name_not_found: {
      id: 225,
      status: 'FAILURE',
      code: 'HV005',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_dynamic_parameter_value_needed: {
      id: 226,
      status: 'FAILURE',
      code: 'HV002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_function_sequence_error: {
      id: 227,
      status: 'FAILURE',
      code: 'HV010',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_inconsistent_descriptor_information: {
      id: 228,
      status: 'FAILURE',
      code: 'HV021',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_attribute_value: {
      id: 229,
      status: 'FAILURE',
      code: 'HV024',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_column_name: {
      id: 230,
      status: 'FAILURE',
      code: 'HV007',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_column_number: {
      id: 231,
      status: 'FAILURE',
      code: 'HV008',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_data_type: {
      id: 232,
      status: 'FAILURE',
      code: 'HV004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_data_type_descriptors: {
      id: 233,
      status: 'FAILURE',
      code: 'HV006',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_descriptor_field_identifier: {
      id: 234,
      status: 'FAILURE',
      code: 'HV091',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_handle: {
      id: 235,
      status: 'FAILURE',
      code: 'HV00B',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_option_index: {
      id: 236,
      status: 'FAILURE',
      code: 'HV00C',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_option_name: {
      id: 237,
      status: 'FAILURE',
      code: 'HV00D',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_string_length_or_buffer_length: {
      id: 238,
      status: 'FAILURE',
      code: 'HV090',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_string_format: {
      id: 239,
      status: 'FAILURE',
      code: 'HV00A',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_invalid_use_of_null_pointer: {
      id: 240,
      status: 'FAILURE',
      code: 'HV009',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_too_many_handles: {
      id: 241,
      status: 'FAILURE',
      code: 'HV014',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_out_of_memory: {
      id: 242,
      status: 'FAILURE',
      code: 'HV001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_no_schemas: {
      id: 243,
      status: 'FAILURE',
      code: 'HV00P',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_option_name_not_found: {
      id: 244,
      status: 'FAILURE',
      code: 'HV00J',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_reply_handle: {
      id: 245,
      status: 'FAILURE',
      code: 'HV00K',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_schema_not_found: {
      id: 246,
      status: 'FAILURE',
      code: 'HV00Q',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_table_not_found: {
      id: 247,
      status: 'FAILURE',
      code: 'HV00R',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_unable_to_create_execution: {
      id: 248,
      status: 'FAILURE',
      code: 'HV00L',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_unable_to_create_reply: {
      id: 249,
      status: 'FAILURE',
      code: 'HV00M',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    fdw_unable_to_establish_connection: {
      id: 250,
      status: 'FAILURE',
      code: 'HV00N',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    plpgsql_error: {
      id: 251,
      status: 'FAILURE',
      code: 'P0000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    raise_exception: {
      id: 252,
      status: 'FAILURE',
      code: 'P0001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    no_data_found: {
      id: 253,
      status: 'FAILURE',
      code: 'P0002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    too_many_rows: {
      id: 254,
      status: 'FAILURE',
      code: 'P0003',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    assert_failure: {
      id: 255,
      status: 'FAILURE',
      code: 'P0004',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    internal_error: {
      id: 256,
      status: 'FAILURE',
      code: 'XX000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    data_corrupted: {
      id: 257,
      status: 'FAILURE',
      code: 'XX001',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
      ],
    },
    index_corrupted: {
      id: 258,
      status: 'FAILURE',
      code: 'XX002',
      labels: [
        'Contact administrators',
        'Связаться с администраторами?',
        'Adminlarga aloqaga chiqing',
      ],
    },
  },
  application: {
    image_validation: {
      id: 1000,
      status: 'BAD REQUEST',
      code: 'FILE',
      labels: [
        'Only JPEG, JPG and PNG files are allowed!',
        'Faqat JPEG, JPG va PNG fayllariga ruxsat beriladi!',
      ],
    },
  },
};

type ErrorPromptMap = {
  [K1 in keyof typeof ERROR_PROMPT_MAP]: {
    [K2 in keyof (typeof ERROR_PROMPT_MAP)[K1]]: ErrorPrompt;
  };
};

export interface ErrorPromptDataType {
  [key: string]: ErrorPrompt;
}

export function getPrompt<
  K1 extends keyof ErrorPromptMap,
  K2 extends keyof ErrorPromptMap[K1],
>(origin: K1, condition: K2): ErrorPrompt {
  return PromptsMap[origin][condition];
}

const PromptsMap: ErrorPromptMap = <ErrorPromptMap>ERROR_PROMPT_MAP;

export function getPromptByCode<K1 extends keyof ErrorPromptMap>(
  origin: K1,
  code: string,
) {
  const flatPrompts = Object.entries(PromptsMap[origin]);
  for (const [key, value] of flatPrompts) {
    if ((value as ErrorPrompt).code === code) {
      return { key, value };
    }
  }
  return null;
}

export function getErrorMessage<
  K1 extends keyof ErrorPromptMap,
  K2 extends keyof ErrorPromptMap[K1],
>(origin: K1, condition: K2): ErrorPrompt {
  return PromptsMap[origin][condition];
}

export function parseIfItsPrompt(error: unknown) {
  console.log(error);
}
