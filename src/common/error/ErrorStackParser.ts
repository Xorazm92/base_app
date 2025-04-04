import ErrorStackParser from 'error-stack-parser';

export function ErrorStackParserFunction(exception: any) {
  let stack: string[] = [];
  ErrorStackParser.parse(exception).forEach((trace) => {
    if (!trace.fileName?.includes('node_modules') && trace.functionName) {
      stack.unshift(trace.functionName);
    }
  });
  return stack;
}
