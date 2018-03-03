import * as R from 'ramda'

// TODO improve processing here to:
// - make return statements implicit
// - expose ramda
// - memoize steps?
const compileStep = stepstr => new Function('inp', stepstr)

export const process = (steps, input) => {
  console.group('processing')
  const ret = steps.reduce((newsteps, { str, out, err }, stepi) => {
      console.log(stepi, steps)
      const prevstep = R.last(newsteps)
      if (prevstep && prevstep.err)
        return R.append({ str, err: 'Previous step failed' }, newsteps)
      const inp = R.pathOr(input, ['out'], prevstep)
      try {
        const stepf = compileStep(str)
        console.log(inp, stepf.toString())
        return R.append({ str, out: stepf(inp) }, newsteps)
      } catch (e) {
        return R.append({ str, err: e }, newsteps)
      }
    }, [])
  console.log(ret)
  console.groupEnd()
  return ret
}
